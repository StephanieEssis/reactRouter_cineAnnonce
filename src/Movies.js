// movies.js
const movies = [
    {
      id: 1,
      title: "Kirikou au village(2012)",
      description:"Les nouvelles aventures de Kirikou nous plongent au cœur du village et de la vie des villageois. La construction du toit d'une case, les contes d'une griotte à la tombée de la nuit, la rencontre avec des touaregs, le pouvoir de la musique.",
      posterURL:  "./assets/kirikou.jpeg", // Utilisation de l'import
      rating: 4.8,

    },
    {
      id: 2,
      title: "Mufasa (2017)",
      description: "Rafiki raconte à la jeune lionne Kiara, la fille de Simba et Nala, la légende de Mufasa. Il est aidé en cela par Timon et Pumbaa, dont les formules choc sont désormais bien connues. Relatée sous forme de flashbacks, l'histoire de Mufasa est celle d'un lionceau orphelin, seul et désemparé qui, un jour, fait la connaissance du sympathique Taka, héritier d'une lignée royale.",
posterURL:"./assets/king.jpeg",
      rating: 4.9,

    },
    {
      id: 3,
      title: "Avatar (2009)",
      description: "Sur le monde extraterrestre luxuriant de Pandora vivent les Na'vi, des êtres qui semblent primitifs, mais qui sont très évolués. Jake Sully, un ancien Marine paralysé, redevient mobile grâce à un tel Avatar et tombe amoureux d'une femme Na'vi.",
    posterURL: "./assets/avatar.jpeg",
      rating: 4.7,

    },
];

export default movies;
