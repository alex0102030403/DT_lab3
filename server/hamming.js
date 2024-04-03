
function decode(bits, len) {
   
   
    console.log("This is length" + len);
	// var z8 = ...
    if(len == 8){
	var z4=parity(bits[3+1]+bits[4+1]+bits[5+1]+bits[6+1]);
	var z2=parity(bits[1+1]+bits[2+1]+bits[5+1]+bits[6+1]);
	var z1=parity(bits[0+1]+bits[2+1]+bits[4+1]+bits[6+1]);
    console.log(z4,z2,z1);
	// var z0 = ...
    var z0 = parity(bits[0]+bits[1]+bits[2]+bits[3]+bits[4]+bits[5]+bits[6]+bits[7]);
    console.log(z0);
    
    var errorPosition=z0*1+z1*2+z2*4+z4*8;
	
	var errorDetected=false;
	if (errorPosition!=0) errorDetected=true;
	if (errorDetected) {
		bits[errorPosition-1]=parity(bits[errorPosition-1]+1);
	}
    return { errorCorrected: errorDetected, errorPosition: errorPosition-1, bits: bits };

}


if(len == 12){
    
    var z8 = parity(bits[7+1]+bits[8+1]+bits[9+1]+bits[10+1]+bits[11+1]);
    var z4 = parity(bits[3+1]+bits[4+1]+bits[5+1]+bits[6+1]+bits[12+1]);
    var z2 = parity(bits[1+1]+bits[2+1]+bits[5+1]+bits[6+1]+bits[9+1]+bits[10+1]);
    var z1 = parity(bits[0+1]+bits[2+1]+bits[4+1]+bits[6+1]+bits[8+1]+bits[10+1]);
    
    var z0 = parity(bits[0]+bits[1]+bits[2]+bits[3]+bits[4]+bits[5]+bits[6]+bits[7]+bits[8]+bits[9]+bits[10]+bits[11]+bits[12]);


    console.log(z8,z4,z2,z1);

    var errorPosition=z0*1+z1*2+z2*4+z4*8+z8*16;
	
	var errorDetected=false;
	if (errorPosition!=0) errorDetected=true;
	if (errorDetected) {
		bits[errorPosition-1]=parity(bits[errorPosition-1]+1);
	}
    return { errorCorrected: errorDetected, errorPosition: errorPosition-1, bits: bits };

}
}

parity = function(number){
	return number % 2;
}

exports.decode = decode;
