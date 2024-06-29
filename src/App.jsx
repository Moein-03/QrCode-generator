import { useLayoutEffect, useState } from 'react'; 
import Swal from 'sweetalert2';
import './App.css'; 

function App() { 
const [temp, setTemp] = useState(""); 
const [word, setWord] = useState(""); 
const [size, setSize] = useState(400); 
const [bgColor, setBgColor] = useState("ffffff"); 
const [qrCode, setQrCode] = useState(""); 

// Changing the URL only when the user 
// changes the input 
useLayoutEffect(() => { 
	setQrCode (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`); 
}, [word, size, bgColor]); 

// Updating the input word when user 
// click on the generate button 
function handleClick() { 
	setWord(temp); 
} 

window.onload = () => {
             Swal.fire({
                          text: '.به عنوان رزومه سازنده آن مورد استفاده است qr code این تولید کننده',
                          timer: 6000
             });
}

return ( 
             
	<div className="App"> 
	<h1>(Moein-03) از QR code تولید کننده</h1> 
	<div className="input-box"> 
		<div className="gen"> 
                                       <button className="button"
                                                    onClick={handleClick}> 
                                                    تولید 
                                       </button> 
                                       <input type="text" onChange={ 
                                                    (e) => {setTemp(e.target.value)}} 
                                                    placeholder="Enter text to encode" 
                                                    /> 
		</div> 
		<div className="extra"> 
                                       <input type="color" onChange={(e) => 
                                       { setBgColor(e.target.value.substring(1)) }} /> 
                                       <h5>:رنگ پیش‌زمینه</h5>
                                       
                                       <input type="range" min="200" max="600"
                                       value={size} onChange={(e) => 
                                       {setSize(e.target.value)}} /> 
                                       <h5>:اندازه</h5> 
		</div> 
	</div> 
	<div className="output-box"> 
		<img src={qrCode} alt="" /> 
		<a href={qrCode} download="QRCode"> 
		<button type="button">دانلود</button> 
		</a> 
	</div> 
	</div> 
); 
} 

export default App;
