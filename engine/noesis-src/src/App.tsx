import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthInit } from './components/auth/AuthInit'
import { AppShell } from './components/layout/AppShell'
import { Landing } from './pages/Landing'
import { Manifesto } from './pages/Manifesto'
import { Council } from './pages/Council'
import { MinistryDetail } from './pages/MinistryDetail'
import { ProposalDetail } from './pages/ProposalDetail'
import { Nous } from './pages/Nous'
import { Nous2 } from './pages/Nous2'
import { Delphi } from './pages/Delphi'
import { Basanos } from './pages/Basanos'
import { Efthynai } from './pages/Efthynai'
import { ToolPage } from './pages/ToolPage'
import { TOOLS } from './data/tools/registry'
import { Workshop } from './pages/Workshop'
import { Blueprint } from './pages/Blueprint'
import { Canon } from './pages/Canon'
import { Cost } from './pages/Cost'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { Profile } from './pages/Profile'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <AuthInit />
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<Landing />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/ministries" element={<Council />} />
          <Route path="/ministry/:slug" element={<MinistryDetail />} />
          <Route path="/proposal/:id" element={<ProposalDetail />} />
          <Route path="/nous" element={<Nous />} />
          <Route path="/nous2" element={<Nous2 />} />
          <Route path="/delphoi" element={<Delphi />} />
          <Route path="/vasanos" element={<Basanos />} />
          <Route path="/efthynai" element={<Efthynai />} />
          {TOOLS.map((tool) => (
            <Route key={tool.slug} path={`/${tool.slug}`} element={<ToolPage key={tool.slug} tool={tool} />} />
          ))}
          <Route path="/ergastirio" element={<Workshop />} />
          <Route path="/blueprint" element={<Blueprint />} />
          <Route path="/canon" element={<Canon />} />
          <Route path="/cost" element={<Cost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
