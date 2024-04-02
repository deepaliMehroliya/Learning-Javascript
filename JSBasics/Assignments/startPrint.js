function printTriangle(height) {
    for (let i = 1; i <= height; i++) {
      let stars = '*'.repeat(i);
      console.log(stars);
    }
  }
  
  // Example usage:
  printTriangle(10);
  