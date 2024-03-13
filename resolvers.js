const axios = require('axios');

const resolvers = {
    Query: {
      obtenerPlatos: async (_, { id }) => {
        try {
          const response = await axios.get(`https://api-dishes.vercel.app/${id}`);
          
          const platoData = response.data.plato; 
  
          const plato = {
            id: platoData.id,
          };
  
          return plato;
        } catch (error) {
          throw new Error('No se pudieron obtener los datos de los platos.');
        }
      },
    },
  };

module.exports = resolvers;
