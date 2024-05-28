
import "./i18n"
import {useTranslation} from 'react-i18next';
function App() {

  const { t } = useTranslation();
  return (
      <div>
       {t("K1")}
      
    </div>
  )
}

export default App
