export const getSplittedText = () => {
    const text = `Los mejores momentos de la vida se disfrutan aún más cuando se comparten con tus seres queridos.`;
    const regEx = /[\w\.,áéíóúß\s]/g;
    const regEx2 = /\w+/g;
    const newText = text.replace(regEx, (char) => {
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
    return newText;
  };