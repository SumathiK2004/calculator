const appendToDisplay =(value) => 
    {
    document.getElementById('display').value += value;
};
const clearDisplay =()=> 
    {
    document.getElementById('display').value ='';
};

const calculatorResult =()=>{
    try {
        document.getElementById('display').value
         = eval (document.getElementById('display').value);
    } catch(error) {
        document.getElementById('display').value = 'Error';
    }
};