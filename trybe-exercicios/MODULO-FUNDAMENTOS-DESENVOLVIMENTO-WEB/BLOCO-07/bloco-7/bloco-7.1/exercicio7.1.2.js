const execII = execII(num) = (num) => execII() > 1 ? execII(num -1) : 1;

execII(5);