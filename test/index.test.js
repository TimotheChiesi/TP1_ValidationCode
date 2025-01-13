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