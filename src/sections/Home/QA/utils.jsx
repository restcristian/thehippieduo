import React from "react";
import Text from "../../../components/Text";

const colors = [
    {
        label: 'Marrón Rústico',
        color: '#A35741'
    },
    {
        label: 'Verde Oliva',
        color: '#605C36'
    },
    {
        label: 'Terracota',
        color: '#AB3F0E'
    },
    {
        label: 'Mauve/Palo Rosa',
        color: '#DBAB9D'
    }, 
    {
        label: 'Marrón Natural',
        color: '#E3C69B'
    }, 
    {
        label: 'Burgundy',
        color: '#8A1619'
    }
]
const WeddingThemeAnswer = () => (
    <div className = "weddingTheme">
        <Text>Es totalmente opcional ir vestido como desees dentro de los estilos cockteles o formales. Si deseas ir con un atuendo que armonice con el tema setentero de nuestra boda, te recomendamos usar tu vestimenta dentro de la siguiente paleta de colores:</Text>
        <ul className = "weddingTheme__colors">
           {colors.map(({label, color}, index) => (
               <li key = {`wedding-color-${label}-${index}`} className = "weddingTheme__item">
                   <div className="weddingTheme__color" style = {{backgroundColor: color}}>
                   </div>
                   <Text className = "weddingTheme__label">{label}</Text>
               </li>
           ))}
        </ul>
    </div>
)

export const qaItems = [
  {
    question: "¿A qué hora debo de llegar?",
    answer:
      "Toda la ceremonia empieza a partir de las 3:30.pm. Por favor ser puntuales.",
  },
  {
    question: "¿Qué tipo de vestimenta me pongo para la boda?",
    answer:
      "Todo tipo de vestimenta con estilos formales y cócteles son los adecuados para el evento. Si eres mujer, recomendamos que evites tacos finos o lleva ambos estilos.",
  },
  {
    question: "¿Cuánto tiempo dura toda la boda?",
    answer: "El programa de la boda tiene una duración de 7 horas.",
  },
  {
    question: "¿Dónde está la lista de regalos?",
    answer:
      'Puedes encontrar la lista de obsequios <a target= "_blank" href = "http://google.com">aquí</a>.',
  },
  {
    question: "¿El día que cae la boda es feriado?",
    answer:
      "A pesar de ser un día de semana, el Jueves 14 de Abril es considerado día feriado por ser Jueves Santo.",
  },
  {
    question:
      "¿Hasta cuándo debo de enviarles mi respuesta de si asistiré a la boda?",
    answer: "Tienes hasta el 1 de Febrero para confirmarnos tu asistencia.",
  },
  {
    question: "¿Puedo llevar niños/as?",
    answer:
      "Lamentamos decirte que sólo pueden ir la cantidad de invitados en la invitación recibida. Los niños no son permitidos.",
  },
  {
    question: "¿Puedo ir vestido/a de acuerdo al tema de la boda?",
    answer: <WeddingThemeAnswer />
  },
  {
    question: "¿Me recomiendas una serie para ver mientras llega el día?",
    answer:
      "Mira <b>It's Ok not to Be Ok</b>, está en Netflix, es 1A. De nada = )",
  },
];
