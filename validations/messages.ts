export const messages = {
  common: "Preencha o campo corretamente",
  email: "Insira um email válido",
  date: "Selecione uma data válida",
  radio: "Selecione uma opção válida",
  authorize: "É necessário marcar a opção para continuar",
  cpf: "Insira um CPF válido",
  rg: "Insira um RG válido",
  select: "Selecione uma opção válida",
  cnpj: "Insira um CNPJ válido",
  time: "Selecione um horário válido",
  check: "É necessário marcar a caixa de diálogo",
};

export const regex = {
  cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  cnpj: /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
};

export const isValidRG = (rg: string): boolean => {
  const digits = rg.replace(/[^\d]+/g, "");

  const invalidRGs = [
    "000000000",
    "111111111",
    "222222222",
    "333333333",
    "444444444",
    "555555555",
    "666666666",
    "777777777",
    "888888888",
    "999999999",
  ];

  if (digits.length !== 9) return false;
  if (invalidRGs.includes(digits)) return false;

  return true;
};

export const isValidateCPF = (cpf: string): boolean => {
  const digits = cpf.replace(/[^\d]+/g, "");

  if (digits.length !== 11) return false;

  const invalidCpfs = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  if (invalidCpfs.includes(digits)) return false;

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(digits.substring(i - 1, i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(digits.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(digits.substring(i - 1, i)) * (12 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(digits.substring(10, 11))) return false;

  return true;
};
