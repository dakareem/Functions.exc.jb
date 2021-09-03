// תרגיל מספר 1 : פונקציה שמקבלת שני מספרים ובודקת האם הם שווים ומחזירה תשובה של
// true/false.

function ex(n1 , n2) {
    return solution = n1 === n2
    }
    ex(22,6) 
    
    
    
    
    // תרגיל מספר 2 :  פונקציה שמקבלת שני מספרים. הפונקציה תבדוק
    //   האם המספר הראשון בסדק הפרמטרים של הפונקציה קטן מהשני ותחזיר תשובה 
    //   true/false.
    
    function ex(n1, n2){
        return n1 < n2
    }
    ex(5,8)
    
    
    
    
    
        // תרגיל מספר 3 : פונקציה שמקבלת מספר. הפונקציה תבדוק האם המספר הוא זוגי ותיזיר תשובה
        // true/false.
    
        function ex(n1) {
    if (n1 % 2 === 0) {
    return true
    }
    else {
        return false
    }
        }
        ex(10)
    
    
    
    
        
        // תרגיל מספר 4 : פונקציה שמקבלת מספר. הפונקציה תבדוק האם הוא אי זוגי ותחזיר תשובה 
        // true/false.
    
        function ex(n1) {
            if (n1 % !2 === 0) {
            return true
            }
            else {
                return false
            }
                }
                ex(10)
    
    
    
    
    
    
            // תרגיל מספר 5 : כתוב פונקציה שמקבלת שם פרטי, שם משפחה, וגיל שהפונקציה תחזיר את הפרטים הללו.
    
            function information (fName,lName,age){
                return {
                    firstName: fName,
                    lastName: lName,
                    theAgeIs: age,
                }
            }
            information("reem", "daka",21)
    
    
    
    
    
    
        // תרגיל מספר 6 : פונקציה שמקבלת אובייקט עם שם פרטי. הפונקציה תחזיר את השם הפרטי.
    
        function ex(yourName) {
            return yourName.name
        }
        ex({name:"reem"})
    
    
    
    
    
        // תרגיל מספר 7 : פונקציה שמקבלת שני אובייקטים , הפונקציה תבדוק האם השם הפרטי של האובייקט זהה ותחזיר
        // תשובה true/false.
        
        function ex(o1,o2) {
            if (o1.name === o2.name){
            return true }
            else {
                return false
            }}
        ex({name:"haim"},{name:"haim"})
        
    
    
    
    
        // תרגיל מספר 8 : פונקציה שמקבלת שני אובייקטים, הפונקציה "תחזיר פונקציה" שמדפיסה את השם הפרטי
        // של האובייקט שנשלח.
    
        function ex(n1, n2) {
        return function(){
                console.log(n1.firstName)
        }
    }
    let printName = ex({firstName:"reem"}, {lastName:"daka"});
    printName();
    
    
    