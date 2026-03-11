function pageBuilder() {
  addLabelInputWithType("date", "date", "Дата", getCurrentDate());
  addLabelInputWithType("time", "time", "Время", "11:00");
  addLabelDatalist("indications-for-catheterization", "Показания для катетеризации", "", "Под УЗ навигацией, в условиях асептики и антисептики, под местной анестезией Sol. Lidocaini 2% - 1,0 ml.");

    // Разделители
  addSpacer(["block-3"]);
}
