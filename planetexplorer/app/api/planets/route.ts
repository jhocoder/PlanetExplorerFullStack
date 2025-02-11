import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";  
import * as sqlite from "sqlite";  


async function dbConnection() {
  const dbPath = "./dataPlanets/PlanetsExplorer.db";  

  const db = await sqlite.open({
    filename: dbPath,    
    driver: sqlite3.Database
  });
  return db;
}


export async function GET() {
  const db = await dbConnection();
  const planetas = await db.all("SELECT * FROM Planetas"); 
  await db.close();

  return NextResponse.json(planetas);  
}
