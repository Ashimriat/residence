declare type SelectOption = {
  label: string;
  value: string;
};

declare type RequestFormData = {
  selectOption: SelectOption | null;
  name: string;
  telegram: string;
  text: string;
};
