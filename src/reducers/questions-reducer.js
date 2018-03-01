import { CHECK_ANSWER } from '../actions/questions-actions';

const initialState = {
    questionsAnwered: 0,
    correctCount: 0,
    questions: [question1,   //questions are below
                question2,
                question3,
                question4,
                question5,
                question6,
                question7,
                question8,
                question9,
                question10]
};

export default function questionsReducer(state=initialState, action) {
    if (action.type === CHECK_ANSWER) {
        return Object.assign({}, state, {
        });
    }
    return state;
}

//defining the questions
let question1 = {
    questionSource: "http://www.reporternewspapers.net/wp-content/uploads/2015/01/mercedes-logo1.jpg",
    logoAltText:"Circle split into three 120 degree slices",
    answers: ["Mercedes-Benz",
              "Maserati",
              "BMW",
              "Fiat"],
    selectedAnswer: null,
    correctAnswer: "Mercedes-Benz",
    correctAnswerIndex: 0
};

let question2 = {
    questionSource: "https://s-media-cache-ak0.pinimg.com/originals/0e/33/55/0e3355f7f8ac0408626994f0ba707af1.jpg",
    logoAltText:"The letters DMC for a logo",
    answers: ["Delorean",
              "Tesla",
              "Bugatti",
              "McLaren"],
    selectedAnswer: null,
    correctAnswer: "Delorean",
    correctAnswerIndex: 0
};

let question3 = {
    questionSource: "http://www.carlogos.org/logo/Pontiac-symbol-640x550.jpg",
    logoAltText:"Long silver arrow pointing down, with red filling and a four-point star in the middle",
    answers: ["Fiat",
              "Acura",
              "Volvo",
              "Pontiac"],
    selectedAnswer: null,
    correctAnswer: "Pontiac",
    correctAnswerIndex: 3
};

let question4 = {
    questionSource: "https://www.logodesignlove.com/images/evolution/skoda-winged-logo.jpg",
    logoAltText:"A circle with a winged arrow inside it",
    answers: ["Skoda",
              "Dihatsu",
              "Peugeot",
              "Rolls Royce"],
    selectedAnswer: null,
    correctAnswer: "Skoda",
    correctAnswerIndex: 0
};

let question5 = {
    questionSource: "http://thenewswheel.com/wp-content/themes/patterns/timthumb.php?src=http://thenewswheel.com/wp-content/uploads/2015/08/current-opel-logo-Z.jpg&q=90&w=660&zc=1",
    logoAltText:"A circle with a horizontal lightning bolt going through it",
    answers: ["Isuzu",
              "Opel",
              "Renault",
              "Mitsubishi"],
    selectedAnswer: null,
    correctAnswer: "Opel",
    correctAnswerIndex: 1
};

let question6 = {
    questionSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY6G8BbLG_68SNRu903tBpTRUdHpyJ1Ba8BhLhUyzVwkejAqEB",
    logoAltText:"A horizontal elipse with what looks like the contour of an umbrella inside of it",
    answers: ["Tata",
              "Tesla",
              "Lotus",
              "Smart"],
    selectedAnswer: null,
    correctAnswer: "Tata",
    correctAnswerIndex: 0
};

let question7 = {
    questionSource: "http://www.car-logos.net/wp-content/uploads/2014/03/lada_logo.jpg",
    logoAltText:"A silver sailboat with a silver horizontal elipse around it, on a blue background",
    answers: ["Koenigsegg",
              "Maybach",
              "KTM",
              "Lada"],
    selectedAnswer: null,
    correctAnswer: "Lada",
    correctAnswerIndex: 3
};

let question8 = {
    questionSource: "https://i.pinimg.com/736x/d4/9a/a1/d49aa1a5e50501507d33f851b6c7cb9c--iconosquare-the-star.jpg",
    logoAltText:"An elipse with seven stars inside of it - all are four-point stars, one big one on the left and six small ones on the right",
    answers: ["Subaru",
              "Mazda",
              "Alfa Romeo",
              "Ford"],
    selectedAnswer: null,
    correctAnswer: "Subaru",
    correctAnswerIndex: 0
};

let question9 = {
    questionSource: "http://4.bp.blogspot.com/-dsqG7fpW5W4/Uohjwbx6Y0I/AAAAAAAAXzc/GGuwRDjEA6I/s1600/Suzuki-Car-Logo-1-Download-Free.jpg",
    logoAltText:"A red letter 'S' formed with almost parallel lines and almost 90 degree angles",
    answers: ["Saab",
              "Ssang Yong",
              "Studebaker",
              "Suzuki"],
    selectedAnswer: null,
    correctAnswer: "Suzuki",
    correctAnswerIndex: 3
};

let question10 = {
    questionSource: "http://www.guessthelogo.com/second/images/logos/citroen-logo2.gif",
    logoAltText:"Two boomerangs pointing upwards",
    answers: ["Citroen",
              "Dacia",
              "Chery",
              "Aston Martin"],
    selectedAnswer: null,
    correctAnswer: "Citroen",
    correctAnswerIndex: 0
};