export function ErrorChecker(error) {
  if (error.error.cause === 500) {
    return <>Сервіс тимчасово недоступний, спробуйте пізніше</>;
  }

  if (error.error.cause === 404) {
    return <>Урок не знайдено, спробуйте інший запит</>;
  }
}
