import axios from "axios";
//pings api and returns definition of word
const handleSearch = async (setDefinition, word) => {
  const query = word.toLowerCase().trim();
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
    );
    setDefinition(JSON.stringify(response.data[0]));
  } catch (error) {
    setDefinition("ERRORHANDLE");
  }
};

export default handleSearch;
