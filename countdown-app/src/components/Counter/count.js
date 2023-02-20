export const count = ()=>{
  const endDate = Date.parse('2023-05-31');
  const currentDate = Date.now();

  let timeLeft = endDate - currentDate;

  let seconds = Math.floor( (timeLeft/1000) % 60 );  
  let minutes = Math.floor( (timeLeft/1000/60) % 60 );  
  let hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );  
  let days = Math.floor( timeLeft/(1000*60*60*24) ); 

  const date = [days, hours, minutes, seconds]


  return [days, hours, minutes, seconds]
}