import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite } from '@capacitor-community/sqlite';
import bcrypt from 'bcryptjs';
import localforage from 'localforage';

// Verificar si estamos en la web o en un dispositivo móvil
const isWeb = Capacitor.getPlatform() === 'web';

// Crear base de datos para la web usando localForage
const createWebDatabase = async () => {
  // Usando localForage para almacenar datos en la web
  const usersStore = localforage.createInstance({
    name: 'usersDB'
  });

  
  return usersStore;
};

// Crear base de datos para móviles usando SQLite
const createMobileDatabase = async () => {
  try {
    const db = await CapacitorSQLite.createConnection({
      database: 'mydb',
      version: 1
    });

    await db.open();
    console.log('Base de datos abierta correctamente');

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      );
    `;

    await db.execute(createTableQuery);
    console.log('Tabla de usuarios creada o verificada');
    return db;
  } catch (error) {
    console.error('Error al crear la BD:', error);
    return null;
  }
};

// Crear la base de datos dependiendo de la plataforma
export const createDatabase = async () => {
  if (isWeb) {
    return await createWebDatabase();
  } else {
    return await createMobileDatabase();
  }
};

// Función para registrar un usuario
export const registerUser = async (name: string, email: string, password: string) => {
  const db = await createDatabase();
  if (!db) return false;

  const hashedPassword = await bcrypt.hash(password, 10);

  if (isWeb) {
    // Para la web, usamos localForage
    await db.setItem(email, { name, email, password: hashedPassword });
    console.log('Usuario registrado con éxito');
  } else {
    // Para dispositivos móviles, usamos SQLite
    try {
      await db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);
      console.log('Usuario registrado con éxito');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      return false;
    }
  }

  return true;
};

// Función para hacer login
export const loginUser = async (email: string, password: string) => {
  const db = await createDatabase();
  if (!db) return false;

  if (isWeb) {
    // Para la web, usamos localForage
    const user = await db.getItem(email);
    if (!user) return false;

    const passwordMatch = await bcrypt.compare(password, user.password);
    return passwordMatch ? user : false;
  } else {
    // Para dispositivos móviles, usamos SQLite
    const result = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (result.values.length === 0) {
      console.log('No se encontró el usuario con ese email');
      return false;
    }

    const user = result.values[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      console.log('Usuario autenticado');
      return user;
    } else {
      console.log('Contraseña incorrecta');
      return false;
    }
  }
};
