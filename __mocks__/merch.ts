const MERCH_DATA: MerchData = {
  title: 'Футболка',
  price: 1500,
};

const mockMerchData = (length: number) => Array.from({ length }, () => MERCH_DATA);


export { mockMerchData };
