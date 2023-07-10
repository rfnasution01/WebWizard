import { Route, Routes } from "react-router-dom"
import { AboutPage, HomePage, NotFoundPage, ResumePage } from "../../pages";
import { Education } from "../../pages/about/education";
import { Experience } from "../../pages/about/experience";
import { Languages } from "../../pages/about/languages";
import { License } from "../../pages/about/license";
import { Skills } from "../../pages/about/skills";
import { Summary } from "../../pages/about/summary";

export const MainRouting = () => {
  return (
    <Routes>
      <Route index element={<HomePage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/about" element={<AboutPage />}>
        <Route index element={<Summary />}/>
        <Route path="summary" element={<Summary />}/>
        <Route path="experience" element={<Experience />}/>
        <Route path="education" element={<Education />}/>
        <Route path="languages" element={<Languages />}/>
        <Route path="licence" element={<License />}/>
        <Route path="skills" element={<Skills />}/>

      </Route>

      <Route path="/resume" element={<ResumePage />}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
  );
}