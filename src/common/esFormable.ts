type Resultado = {
  esFormable: boolean;
  billetes: {
      billetes500: number;
      billetes200: number;
      billetes100: number;
  } | null;
};

export function esFormable(cantidad: number): Resultado {
  // Comenzamos desde la cantidad máxima posible de billetes de 500 hacia abajo
  for (let b500 = Math.floor(cantidad / 500); b500 >= 0; b500--) {
      let restante500 = cantidad - (b500 * 500);
      
      // Luego consideramos la cantidad máxima posible de billetes de 200
      for (let b200 = Math.floor(restante500 / 200); b200 >= 0; b200--) {
          let restante200 = restante500 - (b200 * 200);
          
          // Finalmente, consideramos la cantidad máxima posible de billetes de 100
          for (let b100 = Math.floor(restante200 / 100); b100 >= 0; b100--) {
              let restante100 = restante200 - (b100 * 100);
              
              // Si el restante es 0, hemos encontrado una combinación válida
              if (restante100 === 0) {
                  return {
                      esFormable: true,
                      billetes: {
                          billetes500: b500,
                          billetes200: b200,
                          billetes100: b100
                      }
                  };
              }
          }
      }
  }
  // Si no encontramos ninguna combinación válida
  return {
      esFormable: false,
      billetes: null
  };
}