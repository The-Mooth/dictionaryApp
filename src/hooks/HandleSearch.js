import axios from "axios";

const handleSearch = async (setDefinition, word) => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = response.data[0].meanings[0].definitions[0].definition;
    setDefinition(data);
  } catch (error) {
    console.error(error);
  }
};

export default handleSearch;
