export const formatDate = (date: Date) => {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
  
    return `${yyyy}-${mm}-${dd}`;
  };
  

export const getDateBySearch = (regressDay: number = 0) => {
  const date = new Date();
  date.setDate(date.getDate() - regressDay);

  return formatDate(date);
};

export const getNameMonth = (n: number) => {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat("pt-br", { month: "long" }).format(date);
};

