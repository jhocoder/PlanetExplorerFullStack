from planets import generarDataRandomPlanetas, guardar_csv
from db import savecsv


planetas_generados = generarDataRandomPlanetas(6)


guardar_csv(planetas_generados, "planetas.csv")


savecsv("planetas.csv")
