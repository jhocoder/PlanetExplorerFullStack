import random
import csv

class Planets():
    def __init__(self, name, temperatura, gravedad, habitabilidad, composicion):
        self.name = name
        self.temperatura = temperatura
        self.gravedad = gravedad
        self.habitabilidad = habitabilidad
        self.composicion = composicion
        
    def __repr__(self):
        return "Planeta {}: Temp={}°C, Gravedad={}G, Habitabilidad={}, Composición={}".format(
            self.name, self.temperatura, self.gravedad, self.habitabilidad, self.composicion
        )
    
    @classmethod
    def generarData(cls):
        planets = ["Valencia", "Torrent", "Alzira", "Alicante", "Castellon", "Alfafar"]
        composiciones = ["Rocoso", "Gaseoso", "Hielo", "Metálico"]
        
        nombre = random.choice(planets)
        composicion = random.choice(composiciones)
        gravedad = round(random.uniform(0.5, 30), 2)
        
        habitabilidad = random.choice([True, False])
        if habitabilidad:
            temperatura = round(random.uniform(-50, 50), 2)
        else:
            temperatura = round(random.uniform(-200, 500), 2)
        
        return cls(nombre, temperatura, gravedad, habitabilidad, composicion)

    def to_list(self):
        return [self.name, self.temperatura, self.gravedad, self.habitabilidad, self.composicion]

def generarDataRandomPlanetas(cantidad=10):
    planetasSeleccionados = set()
    planetas = []
    
    while len(planetasSeleccionados) < cantidad:
        planeta = Planets.generarData()
        
        if planeta.name not in planetasSeleccionados:  
            planetasSeleccionados.add(planeta.name)
            planetas.append(planeta)

    return planetas

def guardar_csv(planetas, csv_planets):
    with open(csv_planets, mode="w", newline="") as file:
        writer = csv.writer(file)
        writer.writerow(["Nombre", "Temperatura", "Gravedad", "Habitabilidad", "Composición"])
        for planeta in planetas:
            writer.writerow(planeta.to_list())
    print("CSV generado")

planetas_generados = generarDataRandomPlanetas(6)
guardar_csv(planetas_generados, "planetas.csv")
