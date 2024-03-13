const axios = require('axios');

const resolvers = {
  Query: {
    obtenerPlatos: async (_) => {
      try {
        const response = await axios.get(`https://api-dishes.vercel.app`);
        
        // if (!response.data || !response.data.plato) {
          //   throw new Error('La respuesta de la API no tiene el formato esperado.');
          // }
          
        const platoData = response.data.data.plato;
        
        console.log(response.data.data);

        const plato = {
          _id: platoData._id,
          idDish: platoData.idDish,
          name: platoData.name,
          calories: platoData.calories,
          isVegetarian: platoData.isVegetarian,
          value: platoData.value,
          comments: platoData.comments
        };

        return plato;
      } catch (error) {

        if (axios.isAxiosError(error)) {
          throw new Error(`Error de la API: ${error.message}`);
        }
        throw new Error('No se pudieron obtener los datos de los platos.');
      }
    },
    obtenerPlatoPorNombre: async(_, id) => {
      try {
        const response = await axios.get(`https://api-dishes.vercel.app/${id}`);
        console.log(response);
        
      } catch (error) {
        
      }
    }
  },
};

module.exports = resolvers;
