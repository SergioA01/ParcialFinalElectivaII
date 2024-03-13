const axios = require('axios');

const resolvers = {
    Query: {
      obtenerPlatos: async (_, { id }) => {
        try {
          const response = await axios.get(`https://api.example.com/data/${id}`);
          
          // Supongamos que la respuesta de la API es un objeto que tiene una propiedad 'plato'
          const platoData = response.data.plato; 
  
          // Asegúrate de que 'platoData' coincida con la estructura de tipo 'Platos'
          const plato = {
            id: platoData.id,
            // Otros campos de 'Platos' según la respuesta de la API
          };
  
          return plato;
        } catch (error) {
          throw new Error('No se pudieron obtener los datos de los platos.');
        }
      },
    },
  };

module.exports = resolvers;
