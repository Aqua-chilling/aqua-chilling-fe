export const formatErrorMessageWallet = (message: string) => {
  try {
    const start = message.indexOf('{');
    const end = message.lastIndexOf('}');
    return JSON.parse(message.substring(start, end + 1));
  } catch (err) {
    return null;
  }
};

export const formatAddressToHuman = (address: string | undefined, numberOfDisplayCharacter = 5) => {
  if (address) {
    return (
      address?.substring(0, numberOfDisplayCharacter) +
      '...' +
      address?.substring(address.length - numberOfDisplayCharacter, address.length)
    );
  }
  return '...';
};
