declare type SelectOption = {
  label: string;
  value: string;
};

declare type RequestFormData = {
  selectOption: string | null;
  name: string;
  telegram: string;
  text: string;
};
