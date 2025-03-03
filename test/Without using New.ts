function main(): void {
  const dateObject = new Date();
  const dateString = Date();

  console.log("Using `new Date()`: ");
  console.log(`  typeof dateObject: ${typeof dateObject}`);
  console.log(`  value:`, dateObject, "\n");

  console.log("Using just `Date()`: ");
  console.log(`  typeof dateString: ${typeof dateString}`);
  console.log(`  value:`, dateString);
}

main();
