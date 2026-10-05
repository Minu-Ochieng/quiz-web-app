// Our own question bank. Same shape as the Open Trivia DB API,
// plus a categoryId so we can filter by category.

export const CATEGORIES = [
  { id: 'any', name: 'Any category' },
  { id: 9, name: 'General Knowledge' },
  { id: 17, name: 'Science & Nature' },
  { id: 22, name: 'Geography' },
  { id: 18, name: 'Computers' },
];

export const QUESTION_BANK = [
  // ---------- General Knowledge (9) ----------
  { categoryId: 9, category: 'General Knowledge', difficulty: 'easy', question: 'How many days are there in a leap year?', correct_answer: '366', incorrect_answers: ['365', '364', '367'] },
  { categoryId: 9, category: 'General Knowledge', difficulty: 'easy', question: 'What colour do you get by mixing blue and yellow?', correct_answer: 'Green', incorrect_answers: ['Purple', 'Orange', 'Brown'] },
  { categoryId: 9, category: 'General Knowledge', difficulty: 'easy', question: 'Which animal is known as the &quot;King of the Jungle&quot;?', correct_answer: 'Lion', incorrect_answers: ['Tiger', 'Elephant', 'Leopard'] },
  { categoryId: 9, category: 'General Knowledge', difficulty: 'easy', question: 'How many sides does a hexagon have?', correct_answer: '6', incorrect_answers: ['5', '7', '8'] },
  { categoryId: 9, category: 'General Knowledge', difficulty: 'medium', question: 'What is the largest mammal in the world?', correct_answer: 'Blue whale', incorrect_answers: ['African elephant', 'Giraffe', 'Great white shark'] },
  { categoryId: 9, category: 'General Knowledge', difficulty: 'medium', question: 'Which language has the most native speakers in the world?', correct_answer: 'Mandarin Chinese', incorrect_answers: ['English', 'Spanish', 'Hindi'] },
  { categoryId: 9, category: 'General Knowledge', difficulty: 'medium', question: 'In which country did the Olympic Games begin?', correct_answer: 'Greece', incorrect_answers: ['Italy', 'Egypt', 'France'] },
  { categoryId: 9, category: 'General Knowledge', difficulty: 'hard', question: 'What is the smallest country in the world by area?', correct_answer: 'Vatican City', incorrect_answers: ['Monaco', 'San Marino', 'Liechtenstein'] },
  { categoryId: 9, category: 'General Knowledge', difficulty: 'hard', question: 'How many bones are in the adult human body?', correct_answer: '206', incorrect_answers: ['201', '212', '226'] },
  { categoryId: 9, category: 'General Knowledge', difficulty: 'hard', question: 'Who painted the ceiling of the Sistine Chapel?', correct_answer: 'Michelangelo', incorrect_answers: ['Leonardo da Vinci', 'Raphael', 'Donatello'] },

  // ---------- Science & Nature (17) ----------
  { categoryId: 17, category: 'Science & Nature', difficulty: 'easy', question: 'Which planet is known as the &quot;Red Planet&quot;?', correct_answer: 'Mars', incorrect_answers: ['Venus', 'Jupiter', 'Mercury'] },
  { categoryId: 17, category: 'Science & Nature', difficulty: 'easy', question: 'Which gas do plants take in from the air?', correct_answer: 'Carbon dioxide', incorrect_answers: ['Oxygen', 'Nitrogen', 'Hydrogen'] },
  { categoryId: 17, category: 'Science & Nature', difficulty: 'easy', question: 'What is the chemical formula for water?', correct_answer: 'H2O', incorrect_answers: ['CO2', 'O2', 'H2O2'] },
  { categoryId: 17, category: 'Science & Nature', difficulty: 'easy', question: 'How many legs does a spider have?', correct_answer: '8', incorrect_answers: ['6', '10', '12'] },
  { categoryId: 17, category: 'Science & Nature', difficulty: 'medium', question: 'What is the chemical symbol for gold?', correct_answer: 'Au', incorrect_answers: ['Ag', 'Gd', 'Go'] },
  { categoryId: 17, category: 'Science & Nature', difficulty: 'medium', question: 'What is the hardest natural substance on Earth?', correct_answer: 'Diamond', incorrect_answers: ['Quartz', 'Titanium', 'Granite'] },
  { categoryId: 17, category: 'Science & Nature', difficulty: 'medium', question: 'Which part of a cell is called the &quot;powerhouse&quot;?', correct_answer: 'Mitochondria', incorrect_answers: ['Nucleus', 'Ribosome', 'Chloroplast'] },
  { categoryId: 17, category: 'Science & Nature', difficulty: 'hard', question: 'What is the speed of light, approximately?', correct_answer: '300,000 km per second', incorrect_answers: ['150,000 km per second', '30,000 km per second', '3,000,000 km per second'] },
  { categoryId: 17, category: 'Science & Nature', difficulty: 'hard', question: 'Roughly what percentage of Earth&#039;s atmosphere is nitrogen?', correct_answer: '78%', incorrect_answers: ['21%', '50%', '90%'] },
  { categoryId: 17, category: 'Science & Nature', difficulty: 'hard', question: 'What is the most abundant element in the universe?', correct_answer: 'Hydrogen', incorrect_answers: ['Helium', 'Oxygen', 'Carbon'] },

  // ---------- Geography (22) ----------
  { categoryId: 22, category: 'Geography', difficulty: 'easy', question: 'What is the capital of Kenya?', correct_answer: 'Nairobi', incorrect_answers: ['Mombasa', 'Kisumu', 'Nakuru'] },
  { categoryId: 22, category: 'Geography', difficulty: 'easy', question: 'Which is the largest ocean in the world?', correct_answer: 'Pacific Ocean', incorrect_answers: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'] },
  { categoryId: 22, category: 'Geography', difficulty: 'easy', question: 'How many continents are there?', correct_answer: '7', incorrect_answers: ['5', '6', '8'] },
  { categoryId: 22, category: 'Geography', difficulty: 'easy', question: 'Which is the longest river in Africa?', correct_answer: 'Nile', incorrect_answers: ['Congo', 'Niger', 'Zambezi'] },
  { categoryId: 22, category: 'Geography', difficulty: 'medium', question: 'What is the capital of Australia?', correct_answer: 'Canberra', incorrect_answers: ['Sydney', 'Melbourne', 'Perth'] },
  { categoryId: 22, category: 'Geography', difficulty: 'medium', question: 'In which country is Mount Kilimanjaro?', correct_answer: 'Tanzania', incorrect_answers: ['Kenya', 'Uganda', 'Ethiopia'] },
  { categoryId: 22, category: 'Geography', difficulty: 'medium', question: 'Which is the largest hot desert in the world?', correct_answer: 'Sahara', incorrect_answers: ['Gobi', 'Kalahari', 'Arabian'] },
  { categoryId: 22, category: 'Geography', difficulty: 'hard', question: 'Which country has the most time zones, counting its overseas territories?', correct_answer: 'France', incorrect_answers: ['Russia', 'United States', 'China'] },
  { categoryId: 22, category: 'Geography', difficulty: 'hard', question: 'What is the capital of Kazakhstan?', correct_answer: 'Astana', incorrect_answers: ['Almaty', 'Tashkent', 'Bishkek'] },
  { categoryId: 22, category: 'Geography', difficulty: 'hard', question: 'Which three countries share the shores of Lake Victoria?', correct_answer: 'Kenya, Uganda and Tanzania', incorrect_answers: ['Kenya, Rwanda and Burundi', 'Uganda, Ethiopia and Tanzania', 'Kenya, Uganda and Zambia'] },

  // ---------- Computers (18) ----------
  { categoryId: 18, category: 'Computers', difficulty: 'easy', question: 'Which language is used to style web pages?', correct_answer: 'CSS', incorrect_answers: ['HTML', 'Python', 'SQL'] },
  { categoryId: 18, category: 'Computers', difficulty: 'easy', question: 'What does CPU stand for?', correct_answer: 'Central Processing Unit', incorrect_answers: ['Central Program Utility', 'Computer Personal Unit', 'Core Processing Unit'] },
  { categoryId: 18, category: 'Computers', difficulty: 'easy', question: 'What does WWW stand for?', correct_answer: 'World Wide Web', incorrect_answers: ['World Web Wire', 'Wide World Web', 'Web World Wide'] },
  { categoryId: 18, category: 'Computers', difficulty: 'easy', question: 'Which company created the Windows operating system?', correct_answer: 'Microsoft', incorrect_answers: ['Apple', 'Google', 'IBM'] },
  { categoryId: 18, category: 'Computers', difficulty: 'medium', question: 'What does HTML stand for?', correct_answer: 'HyperText Markup Language', incorrect_answers: ['HighText Machine Language', 'HyperTool Multi Language', 'Home Text Markup Language'] },
  { categoryId: 18, category: 'Computers', difficulty: 'medium', question: 'Which symbols start a single-line comment in JavaScript?', correct_answer: '//', incorrect_answers: ['#', '&lt;!--', '**'] },
  { categoryId: 18, category: 'Computers', difficulty: 'medium', question: 'In React, which hook stores state inside a component?', correct_answer: 'useState', incorrect_answers: ['useEffect', 'useRef', 'useMemo'] },
  { categoryId: 18, category: 'Computers', difficulty: 'hard', question: 'Which data structure works on a Last In, First Out basis?', correct_answer: 'Stack', incorrect_answers: ['Queue', 'Tree', 'Graph'] },
  { categoryId: 18, category: 'Computers', difficulty: 'hard', question: 'What is the decimal number 10 in binary?', correct_answer: '1010', incorrect_answers: ['1001', '1100', '1110'] },
  { categoryId: 18, category: 'Computers', difficulty: 'hard', question: 'Which HTTP status code means &quot;Too Many Requests&quot;?', correct_answer: '429', incorrect_answers: ['404', '403', '503'] },
];