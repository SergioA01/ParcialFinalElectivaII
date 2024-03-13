const axios = require('axios');

const resolvers = {
  Query: {
    obtenerPlatos: async (_) => {
      try {
        const response = await axios.get(`https://api-dishes.vercel.app`);

        if (!response.data || !response.data.plato) {
          throw new Error('La respuesta de la API no tiene el formato esperado.');
        }

        const platoData = response.data.plato;

        const plato = {
          id: platoData.id,
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
  },
};

module.exports = resolvers;
