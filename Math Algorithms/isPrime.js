function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(1));
console.log(isPrime(7));
console.log(isPrime(22));
console.log(isPrime(3));
