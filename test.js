var n =5;

const x = (n) => {
    if(n===0){
        return 'ERROR';
    }
    else{
        let x=""
        for (let i=0; i<n; i++) {
            for (let i2=0; i2<n; i2++) {
                x += (i2==i || i2==n-i-1) ? "X" : "_";
            }
            x+="\n";
        }
        return x;
    }
};


console.log(x(n));
