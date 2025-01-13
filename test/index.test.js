import {my_alpha_number_t, sum, my_size_alpha_t, my_display_alpha_t, my_array_alpha_t, my_is_posi_neg_t, fibo, my_display_alpha_reverse_t, my_length_array_t, my_display_unicode_t} from '../src/';


describe('my_alpha_number_t', () => {
  it('Je souhaite tester si la fonction my_alpha_number_t renvoi bien “Hello”', () => {
    expect(my_alpha_number_t("Hello")).toBe('Hello');
  });
  it('Je souhaite passer un argument “bonjour” le retour attendu est “Bonjour”', () => {
    expect(my_alpha_number_t("Bonjour")).toBe('Bonjour');
  });
  it('Je souhaite passer un argument avec la valeur “” (vide) le retour attendu sera “” vide aussi', () => {
    expect(my_alpha_number_t("")).toBe('');
  });
});

describe('sum', () => {
    it('Should return the sum of 2+2; which is 4', () => {
        expect(sum(2, 2)).toBe(4);
    });      
    it('Should return the sum of "2"+"2"; which is 0', () => {
        expect(sum('2', '2')).toBe(0);
    });
});

describe('my_size_alpha_t', () => {
    it('Should return the length of the string "hello world" which is 11', () => {
        expect(my_size_alpha_t('hello world')).toBe(11);
    });
    it('Should return 0 for non-string inputs', () => {
    expect(my_size_alpha_t(12345)).toBe(0);
    });
});

describe('my_display_alpha_t function', () => {
    it('should return a string', () => {
      const result = my_display_alpha_t();
      expect(typeof result).toBe('string');
    });
  
    it('should return the lowercase alphabet in correct order', () => {
      const result = my_display_alpha_t();
      expect(result).toBe('abcdefghijklmnopqrstuvwxyz');
    });
  });

  describe('my_array_alpha_t function', () => {
    it('should return an array of characters from the input string', () => {
      const inputString = 'hello';
  
      const result = my_array_alpha_t(inputString);
  
      expect(result).toEqual(['h', 'e', 'l', 'l', 'o']);
    });
  
    it('should handle an empty string input', () => {
      const inputString = '';
  
      const result = my_array_alpha_t(inputString);
  
      expect(result).toEqual([]);
    });
  });

  describe('my_is_posi_neg_t function', () => {
    it('should return "NEGATIVE" for zero or negative numbers', () => {
      expect(my_is_posi_neg_t(0)).toBe('NEGATIVE');
      expect(my_is_posi_neg_t(-1)).toBe('NEGATIVE');
      expect(my_is_posi_neg_t(-100)).toBe('NEGATIVE');
    });
  
    it('should return "POSITIF" for positive numbers', () => {
      expect(my_is_posi_neg_t(1)).toBe('POSITIF');
      expect(my_is_posi_neg_t(100)).toBe('POSITIF');
      expect(my_is_posi_neg_t(3.14)).toBe('POSITIF');
    });
  });


describe('fibo function', () => {
    it('should return 0 for n <= 0', () => {
      expect(fibo(0)).toBe(0);
      expect(fibo(-1)).toBe(0);
      expect(fibo(-10)).toBe(0);
    });
  
    it('should return 1 for n = 1 or n = 2', () => {
      expect(fibo(1)).toBe(1);
      expect(fibo(2)).toBe(1);
    });
  
    it('should correctly calculate Fibonacci numbers for n > 2', () => {
      expect(fibo(3)).toBe(2); // 1 + 1
      expect(fibo(4)).toBe(3); // 1 + 2
      expect(fibo(5)).toBe(5); // 2 + 3
      expect(fibo(6)).toBe(8); // 3 + 5
      expect(fibo(10)).toBe(55); // 34 + 21
    });
  
    it('should handle large values of n', () => {
      const largeFibo = fibo(20); // Calculated manually: 6765
      expect(largeFibo).toBe(6765);
    });
  });

  describe('my_display_alpha_reverse_t function', () => {
    it('should return the alphabet in reverse order', () => {
      const alpha = my_display_alpha_t(); // "abcdefghijklmnopqrstuvwxyz"
      const reverseAlpha = my_display_alpha_reverse_t();
      expect(reverseAlpha).toBe([...alpha].reverse().join(''));
    });
  
    it('should always return the reverse alphabet, ignoring external input', () => {
      const reverseAlpha = my_display_alpha_reverse_t();
      expect(reverseAlpha).toBe('zyxwvutsrqponmlkjihgfedcba');
    });
  });

  describe('my_length_array_t function', () => {
    it('should return the correct length of a non-empty array', () => {
      const arr = [1, 2, 3, 4, 5];
      const length = my_length_array_t(arr);
      expect(length).toBe(5);
    });
  
    it('should return 0 for an empty array', () => {
      const arr = [];
      const length = my_length_array_t(arr);
      expect(length).toBe(0);
    });
  
    it('should handle an array with one element correctly', () => {
      const arr = [42];
      const length = my_length_array_t(arr);
      expect(length).toBe(1);
    });
  
    it('should return 0 when the input is not an array', () => {
      const notAnArray = 'not an array';
      const length = my_length_array_t(notAnArray);
      expect(length).toBe(0);
    });
  });