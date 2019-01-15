export default{
	changeCity (state,city){
        	console.log(state);
        	state.city=city;
          try{
            localStorage.city=city;
          }catch(e){

          }
        }
}