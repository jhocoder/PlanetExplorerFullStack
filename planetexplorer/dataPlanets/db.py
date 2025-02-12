import sqlite3
import os
import csv
#comment
ruta_db = os.path.join(os.getcwd(), 'PlanetsExplorer.db')

def dbConnection():

    sqlconnection = sqlite3.connect(ruta_db)
    cursor = sqlconnection.cursor()
    return sqlconnection, cursor

def savecsv(documento):

    conn, cursor = dbConnection()

    # cursor.execute("""
    #     CREATE TABLE IF NOT EXISTS Planetas (
    #         nombre TEXT,
    #         temperatura REAL,
    #         gravedad REAL,
    #         habitabilidad BOOLEAN,
    #         composicion TEXT
    #     )
    # """)
    
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS Planetas (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        temperatura REAL,
        gravedad REAL,
        habitabilidad BOOLEAN,
        composicion TEXT,
        imagen_id INTEGER
    )
""")





    with open(documento, newline='', encoding='utf-8') as file_csv:
        reader = csv.reader(file_csv)
        next(reader) 

        for row in reader:
            nombre, temperatura, gravedad, habitabilidad, composicion = row
            temperatura = float(temperatura) 
            gravedad = float(gravedad)
            habitabilidad = habitabilidad.lower() == "true" 

            cursor.execute("""
                INSERT INTO Planetas (nombre, temperatura, gravedad, habitabilidad, composicion)
                VALUES (?, ?, ?, ?, ?)
            """, (nombre, temperatura, gravedad, habitabilidad, composicion))

    conn.commit()
    conn.close()
    print("Datos guardados en la base de datos.")
