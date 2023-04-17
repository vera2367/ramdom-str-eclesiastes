const messages = [
"Todo es tan tedioso, imposible de describir. No importa cuánto veamos, nunca quedamos satisfechos. No importa cuánto oigamos, nada nos tiene contentos.",
"La historia no hace más que repetirse; ya todo se hizo antes. No hay nada realmente nuevo bajo el sol.",
"Lo que está mal no puede corregirse; lo que se ha perdido no puede recuperarse.",
"A la larga, a todos les espera el mismo destino, sean justos o malvados, buenos o malos, religiosos o no religiosos, estén o no ceremonialmente puros.",
"Los que están vivos al menos saben que un día van a morir, pero los muertos no saben nada. Ya no reciben más recompensas, y nadie los recuerda.",
"No dejes que la emoción de la juventud te lleve a olvidarte de tu Creador. Hónralo mientras seas joven, antes de que te pongas viejo y digas: «La vida ya no es agradable».",
  ];
  
  const BiblicalCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    BiblicalCommit
  };