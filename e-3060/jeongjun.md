## easy난이도 - TypeChallenges 3060번: Unshift

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBDMAMCsB2CBaCAFArgZwBaVRSOIICMBPCAKwEsBDAOwHM9GIAKAAVsZd0YC2AUwAudAJQQAxELrZKUugCcldcmAJStEAIqYh2ETQD2DDVACSAgA4AbIcIYiII3EIhMhDIUpoBjCAA3H2wTBghjADMIAAM4gEEVNQA6axxcOJjzCAAxYyUIIQAPOht7AC5szJFyawM-X2sRAhq6iAAlA0xbZwBeDHSAHgBtAEYAGggAJgBdSYByaHmAPghgYAgxyamFpZmCTOzVgDUaIQB3CPCAcRoRAAlMUnKIXBERa2xy9ZFsP1xklRsMl8kxgHAkGAQMANKAIAB9RFI5FIiAATWMmAKAGFjAATdz3HzuFGkxEQaEaVruLB4QYAFUmAFVVv1GOowHCyaSIPSDM5sXIDAjuciKTCaDZ8s5qRAAN4QACiAEdMHRbJNFUU6n5nABfCCRJTGAQQeacakof7q+zMAzATBGWzYeZU2ruPxC7AQfrDAhanUiQYqtW2Qa03AjOYQUbLSZjGbLOP+7VCXXB1Xq8NDLbTaOLFbxibTXbzRPJqABtNBkNZiMjeajebbUvR0jGYz2RhxzaN5sls1LSbtzuyBjl8ZgfackAi0XknJY1w+CAAZREQk+c-n4pnBFWq-4Snc5ExBWwncdYS+r3en2+wF+-0BwNB4IQiGAjGw5x8+4gpwXBAF62Fepg3m8HxfD8fwAkCIJKGCEKfiBYEMNg-4ALL5O42L8LYtqeBBd7QY+sEvghTBQjCQA)

<br/>

## 풀이

```ts
type Unshift<T extends unknown[], U> = [U, ...T];
```