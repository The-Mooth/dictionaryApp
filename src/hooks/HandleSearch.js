import axios from "axios";

const handleSearch = async (setDefinition, word) => {
  const query = word.toLowerCase().trim();
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
    );
    //const data = response.data[0].meanings[0].definitions[0].definition;
    setDefinition(JSON.stringify(response.data[0]));
  } catch (error) {
    setDefinition("ERRORHANDLE");
  }
};

export default handleSearch;
