from planets import generarDataRandomPlanetas, guardar_csv
from db import savecsv

# Generar planetas aleatorios
planetas_generados = generarDataRandomPlanetas(6)

# Guardar los planetas en un archivo CSV
guardar_csv(planetas_generados, "planetas.csv")

# Guardar los datos del archivo CSV en la base de datos
savecsv("planetas.csv")
