export const getSplittedText = () => {
    const text = `Los mejores momentos de la vida se disfrutan aún más cuando se comparten con tus seres queridos.`;
   
    const words = text.split(' ');

    return words.map(word => {
      return `<span class = "word">${getSplittedWord(word)}</span>`;
    }).join(' ');
    
  };

  const getSplittedWord = (word) => {
    const letterRegex = /[\w\.,áéíóúß\s]/g;
    const newWord = word.replace(letterRegex, (char) => {
      let inside;
      switch (char.trim()) {
        case "":
          inside = "&nbsp;";
          break;
        default:
          inside = char;
          break;
      }
      return `<span class = "char animating ${char.trim() === "" ? 'space' : ''}">${inside}</span>`;
    });
    return newWord;
  }