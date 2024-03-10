// import logo from './logo.svg';
// import { useState } from 'react';

// import './App.css';
// import Header from './components/Header';
// import Password from './components/Password';
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <hr />
//       <Password />
     
//     </div>
//   );
// }

// export default App;
import { useState } from 'react';
import './App.css';
import Checkbox from './components/Checkbox';
import './components/Checkbox.css';

function App() {
  const [password, setPassword] = useState({
    length: 5,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false
  });

  const [handleText, sethandleText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChangeUppercase = () => {

    setPassword({
      ...password,
      uppercase: !password.uppercase,
    });
  }

  const handleChangeLowercase = () => {

    setPassword({
      ...password,
      lowercase: !password.lowercase,
    });
  }

  const handleChangeSymbols = () => {
    setPassword({
      ...password,
      symbols: !password.symbols,
    });
  }

  const handleChangeNumbers = () => {

    setPassword({
      ...password,
      numbers: !password.numbers,
    });
  }

  const setPasswordLength = (value) => {
    setPassword({
      ...password,
      length: value,
    })
  }

  function generatePassword() {

    const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
    const lowercaseLetters = characterCodes.map(letter => String.fromCharCode(letter));

    const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase())

    const { length, uppercase, lowercase, numbers, symbols } = password;

    const generateWord = (length, uppercase, lowercase, numbers, symbols) => {
      const availablecharacters = [
        ...(uppercase ? uppercaseLetters : []),
        ...(lowercase ? lowercaseLetters : []),
        ...(numbers ? numbersArray : []),
        ...(symbols ? symbolsArray : [])
      ]

      const suffleArray = (array) =>
        array.sort(() => Math.random() - 0.5);
      const characters = suffleArray(availablecharacters).slice(0, length);
      sethandleText(characters.join(''))
      return characters;

    }
    { console.log('generated', generatePassword.value) }
    generateWord(length, uppercase, lowercase, numbers, symbols)
  }


  return (
    <div className="wrapper">
      <div className="container wrapper-box">
        <h2>Password Generator</h2>
        <hr />

        <div className='password-box'>
          <input type='text' value={handleText} onChange={(e) => {
            sethandleText(e.target.value)
          }} />

          <button className='copy-btn'
            onClick={() => {
              if (handleText.length > 0) {
                navigator.clipboard.writeText(handleText);
                setCopied(true);
                setInterval(() => {
                  setCopied(false);
                }, 2000)
              }
            }}
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <br />

        <div className='passwrod-length'>
          <label>Select Password length(**8-50 characters**)</label>
          <input type='number'
            value={password.length} 
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!isNaN(value)) { 
                const clampedValue = Math.min(Math.max(value, 8), 15); 
                setPasswordLength(clampedValue);
              }
            }}
            max={15}
            min={8} />
        </div>
        <div className='words'>
          <div className='letters'>
          <Checkbox value={password.uppercase} onChange={handleChangeUppercase} />

            <label> Include Uppercase Letter </label>
          </div>

          <div className='letters'>
          <Checkbox value={password.lowercase} onChange={handleChangeLowercase} />

            <label> Include Lower Letter </label>
          </div>

          <div className='letters'>
          <Checkbox value={password.numbers} onChange={handleChangeNumbers} />

            <label> Include Numbers </label>
          </div>

          <div className='letters'>
          <Checkbox value={password.symbols} onChange={handleChangeSymbols} />

            <label> Include Symbols </label>
          </div>
        </div>
        <button className='generate-password' onClick={generatePassword}>Generate Password</button>
        {console.log('generated')}

      </div>
    </div>
  );
}

export default App;

