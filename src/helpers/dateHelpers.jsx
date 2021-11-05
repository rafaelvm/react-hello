export default function getAgeFrom(age) {
  if (!age) {
    return "?";
  }

  const [birthYear, birthMonth, birthDay] = age.split("-");
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  const birthday = todayYear - parseInt(birthYear, 10);

  if (parseInt(birthMonth, 10) > todayMonth) {
    return age - 1;
  }

  if (
    parseInt(birthMonth, 10) === todayMonth &&
    parseInt(birthDay, 10) > todayDay
  ) {
    return age - 1;
  }

  return birthday;
}
