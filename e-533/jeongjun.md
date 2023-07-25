## easy난이도 - TypeChallenges 533번: Concat

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBCsDMsQLQQMIHsB2BjAhgF0iUWJMICMBPCAQQwBMAnAUyoGkGcBnNAN04GsqACgACZZrAAM-DgDYAnFk4BKCAGImXKmpwMOFMITXGIARQCuTTngCWmQ1ACSAWwAOAGybOmGPBDwAFkwQAFI4PDgAylgMNq5+AAbUejgUAHRYmLh4CRAAZubYtpgQNhj+Qf4UrsGcFNZeaTRVNf44-FYVwXgA7mgQugDm5t6+nE0AKpVo5niusxCcATPudBBkwTgQGEw9AylUgfil2O7mdJ1l83icJxDueAwQaAwXDA4QAGIvEEwAHjg3J4AFwfBLgm6EPDVYIAJSs5geEAAvKgsvgADwAbQAjABdAA0ECxACY8QA+CDAYC-P41LB4JhrPD9DbEnFEsmEcEJD6UgBqNl2z3KAHEbHgABLmMjAiABPBzTjA6k3LABNIAK3GL0GwDgsDAIGAhlAEAA+pardarRAAJozJ7oC4QSVMZgWm1e80QY2GaGtdDYTETIkAVUpqJwGAMYDN3q9EAmVj8KC4nQTNt9JpsbhefgDwQA3hAAKIAR3MOHcRNLdKYDIgAF98gw0M4IAByESFxDq6ueDCDKzAWY2dycTuGTIYaz+cweYKo3F4ga3GfWf0wiC4TidZeEOv0vAYitV9wYoPZbGE4kUolYinkgmH+sM0+V6uX9Enx8P-HPuyT4vlAR4NieZ5flemKFmgeTzouRKwfBeALp4gG4kSAHPq+x4fue37Br+HIQGSD6wESAAs97spyRIURA1HkjhoFvhBn4XtBv6djinZ0V2sCdreWJ5NWe5EmQaBoJ40ZEp2lFCRhPF8aRcmCUSokTkwElSTJGByQpwFgHipo0j2nCIP8x6WXoLxgIWvy2U8qJcRiGCIjWECFBceRlEy5KmiAnqZpaXzmAwgTuhAkSMq4twhbafqgIQlKRAEujBBQjqLNJY6YMq8qKnFKrAGqGramkur6vAwDRpwPTuilECCsK3BnMUs5ygqSolWVWo6gweoGsAbV5bOTUALIvMEKDpe4g7DgV3XFaqnDqv1lWDUaJpAA)

<br/>

## 풀이

```ts
type Concat<
  T extends any[] | [] | readonly any[],
  U extends any[] | [] | readonly any[]
> = [...T, ...U];
```