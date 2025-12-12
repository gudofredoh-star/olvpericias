import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calculator, FileText, Clock, Shield, CheckCircle, Award, Users, Mail, Phone, Instagram, Linkedin, Download, Eye, Star, Target, Briefcase, Scale, TrendingUp, FileCheck, AlertCircle, Calendar, MapPin } from 'lucide-react';
const Index = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
  };
  const servicos = [{
    titulo: "Liquidação Inicial",
    descricao: "Cálculo completo das verbas trabalhistas com base na sentença judicial",
    icone: <Calculator className="icon-professional" />,
    prazo: "24-48h"
  }, {
    titulo: "Liquidação de Sentença",
    descricao: "Apuração precisa dos valores devidos conforme decisão judicial",
    icone: <Scale className="icon-professional" />,
    prazo: "3-5 dias"
  }, {
    titulo: "Atualização de Valores",
    descricao: "Correção monetária e juros aplicados conforme legislação vigente",
    icone: <TrendingUp className="icon-professional" />,
    prazo: "24-48h"
  }, {
    titulo: "Cálculos para Acordo",
    descricao: "Simulações e cenários para negociações extrajudiciais",
    icone: <FileCheck className="icon-professional" />,
    prazo: "24-48h"
  }, {
    titulo: "Impugnação de Cálculos",
    descricao: "Análise técnica e contestação fundamentada de cálculos apresentados",
    icone: <AlertCircle className="icon-professional" />,
    prazo: "3-5 dias"
  }, {
    titulo: "Revisão dos Cálculos do Juízo",
    descricao: "Verificação e análise crítica dos cálculos elaborados pelo tribunal",
    icone: <Eye className="icon-professional" />,
    prazo: "3-5 dias"
  }, {
    titulo: "Parecer Técnico",
    descricao: "Análise especializada com fundamentação técnica e jurídica",
    icone: <FileText className="icon-professional" />,
    prazo: "5-7 dias"
  }, {
    titulo: "Cálculos Específicos",
    descricao: "Horas extras, DSR, férias + 1/3, 13º, adicional noturno, periculosidade/insalubridade, reflexos, FGTS, rescisões",
    icone: <Target className="icon-professional" />,
    prazo: "24-72h"
  }];
  const diferenciais = [{
    titulo: "Precisão Técnica",
    descricao: "Todos os cálculos são realizados exclusivamente no PJe-Calc, ferramenta oficial e credenciada",
    icone: <Award />
  }, {
    titulo: "Responsabilidade Profissional",
    descricao: "Formação em Ciências Contábeis e Perito judicial consolidado",
    icone: <Shield />
  }, {
    titulo: "Entregas Rápidas",
    descricao: "Prazos otimizados sem comprometer a qualidade técnica dos laudos",
    icone: <Clock />
  }, {
    titulo: "Laudos Prontos para PJe",
    descricao: "Documentos formatados e estruturados para anexação direta no sistema judicial",
    icone: <CheckCircle />
  }, {
    titulo: "Comunicação Objetiva",
    descricao: "Relatórios claros, diretos e tecnicamente fundamentados",
    icone: <FileText />
  }, {
    titulo: "Sigilo Absoluto",
    descricao: "Confidencialidade total dos dados e informações processuais",
    icone: <Users />
  }];
  const metodologia = [{
    etapa: "Recebimento",
    descricao: "Análise da sentença ou documentos processuais enviados pelo cliente"
  }, {
    etapa: "Leitura Técnica",
    descricao: "Identificação precisa dos pedidos deferidos e parâmetros de cálculo"
  }, {
    etapa: "Parametrização",
    descricao: "Configuração no PJe-Calc com todos os dados e variáveis necessárias"
  }, {
    etapa: "Conferência",
    descricao: "Verificação das verbas deferidas e aplicação correta da legislação"
  }, {
    etapa: "Revisão Dupla",
    descricao: "Validação da precisão numérica e aderência jurídica dos resultados"
  }, {
    etapa: "Geração do Laudo",
    descricao: "Elaboração do relatório final em PDF, planilha Excel e arquivo PJe-Calc"
  }, {
    etapa: "Entrega",
    descricao: "Envio dos documentos finalizados dentro do prazo estabelecido"
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section section-padding relative z-10">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  Assistente Técnico Especializado
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  OLV Perícias e Cálculos
                </h1>
                <h2 className="text-2xl lg:text-3xl font-light text-white/90">
                  Cálculos Trabalhistas
                </h2>
                <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                  Precisão técnica em cálculos trabalhistas para fortalecer sua tese jurídica.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-primary animate-pulse-glow">
                  <Mail className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </Button>
                <Button size="lg" variant="outline" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-[hsl(var(--primary))]">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Profissional
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Instagram className="w-5 h-5 text-white/70" />
                  <span className="text-white/70">@gustavooliveiracalculos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5 text-white/70" />
                  <span className="text-white/70">LinkedIn</span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="stats-number text-white">100%</div>
                    <p className="text-white/80">PJe-Calc Oficial</p>
                  </div>
                  <Separator className="bg-white/20" />
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">24-48h</div>
                      <p className="text-white/70 text-sm">Cálculos Simples</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">3-5 dias</div>
                      <p className="text-white/70 text-sm">Cálculos Complexos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação Profissional */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-gradient">Contexto Profissional</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">Atuo como perito judicial e assistente técnico de cálculos trabalhistas para advogados em todo o Brasil. Todos os cálculos são realizados exclusivamente no PJe-Calc, ferramenta oficial e credenciada pelo Conselho Nacional de Justiça.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-professional">
                <CardHeader className="text-center">
                  <Briefcase className="icon-professional mx-auto" />
                  <CardTitle>Formação Acadêmica</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Formado em Ciências Contábeis, com foco em perícia judicial e cálculos trabalhistas.</p>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader className="text-center">
                  <Award className="icon-professional mx-auto" />
                  <CardTitle>Perspectiva Profissional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground"> Perito Judicial há 3 anos e há 8 anos atuando na área, expertise técnica e jurídica.</p>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader className="text-center">
                  <Shield className="icon-professional mx-auto" />
                  <CardTitle>Compromisso</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Precisão, responsabilidade técnica e profissionalismo jurídico em cada entrega.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia de Trabalho */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-gradient">Metodologia de Trabalho</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Processo estruturado que garante precisão técnica e aderência jurídica em cada etapa
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                {metodologia.map((item, index) => <div key={index} className="methodology-step">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-[hsl(var(--primary))]">
                        {index + 1}. {item.etapa}
                      </h4>
                      <p className="text-muted-foreground">{item.descricao}</p>
                    </div>
                  </div>)}
              </div>

              <Card className="card-professional sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[hsl(var(--primary))]" />
                    Prazos de Entrega
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Cálculos Simples</span>
                    <Badge variant="secondary">24-48h</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Cálculos Médios</span>
                    <Badge variant="secondary">3-5 dias</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Cálculos Complexos</span>
                    <Badge variant="secondary">Sob análise</Badge>
                  </div>
                  <Separator />
                  <p className="text-sm text-muted-foreground">
                    * Prazos podem variar conforme complexidade e volume de dados
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Prestados */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-gradient">Serviços Prestados</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções técnicas especializadas para todas as demandas de cálculos trabalhistas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicos.map((servico, index) => <Card key={index} className="service-card">
                <CardHeader className="text-center">
                  {servico.icone}
                  <CardTitle className="text-lg">{servico.titulo}</CardTitle>
                  <Badge variant="outline" className="mt-2">{servico.prazo}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">
                    {servico.descricao}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-gradient">Diferenciais Técnicos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Características que garantem excelência e confiabilidade nos serviços prestados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciais.map((diferencial, index) => <Card key={index} className="card-professional text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center mb-4">
                    {React.cloneElement(diferencial.icone, {
                  className: "w-6 h-6 text-[hsl(var(--primary))]"
                })}
                  </div>
                  <CardTitle className="text-lg">{diferencial.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Exemplos e Modelos */}
      

      {

      {/* Contato Profissional */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-gradient">Contato Profissional</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Entre em contato para solicitar orçamento ou esclarecer dúvidas técnicas
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <Card className="card-professional">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-[hsl(var(--primary))]" />
                      E-mail Profissional
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Para envio de documentos, solicitação de orçamentos e comunicações formais:
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="font-mono text-[hsl(var(--primary))]">
                        gustavo.calculos@email.com
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-professional">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[hsl(var(--primary))]" />
                      WhatsApp Profissional
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Para contatos rápidos, esclarecimentos e acompanhamento de processos:
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="font-mono text-[hsl(var(--primary))]">
                        (11) 99999-9999
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-professional">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Instagram className="w-5 h-5 text-[hsl(var(--primary))]" />
                      Redes Sociais
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span>Instagram</span>
                      <span className="font-mono text-[hsl(var(--primary))]">@gustavooliveiracalculos</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span>LinkedIn</span>
                      <span className="text-muted-foreground">Em breve</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="contact-form">
                <CardHeader>
                  <CardTitle>Solicitar Orçamento</CardTitle>
                  <CardDescription>
                    Preencha o formulário para receber uma proposta personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome Completo *</Label>
                        <Input id="nome" name="nome" value={formData.nome} onChange={handleInputChange} placeholder="Dr(a). Nome Sobrenome" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail Profissional *</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="email@escritorio.com.br" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone/WhatsApp</Label>
                        <Input id="telefone" name="telefone" value={formData.telefone} onChange={handleInputChange} placeholder="(11) 99999-9999" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="empresa">Escritório/Empresa</Label>
                        <Input id="empresa" name="empresa" value={formData.empresa} onChange={handleInputChange} placeholder="Nome do Escritório" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Detalhes do Projeto *</Label>
                      <Textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleInputChange} placeholder="Descreva o tipo de cálculo necessário, prazo desejado e outras informações relevantes..." rows={4} required />
                    </div>

                    <Button type="submit" className="w-full btn-primary">
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar Solicitação
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--primary))] text-white py-12">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">OLV Perícias e Cálculos</h3>
              <p className="text-white/80">Cálculos Trabalhistas</p>
              <p className="text-white/70 text-sm">
                Precisão técnica em cálculos trabalhistas para fortalecer sua tese jurídica.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contato</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>gustavo.calculos@email.com</p>
                <p>(11) 99999-9999</p>
                <p>@gustavooliveiracalculos</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Serviços</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>Liquidação de Sentença</p>
                <p>Cálculos Trabalhistas</p>
                <p>Pareceres Técnicos</p>
                <p>Impugnação de Cálculos</p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-white/20" />
          
          <div className="text-center text-white/70 text-sm">
            <p>© 2024 OLV Perícias e Cálculos - Cálculos Trabalhistas. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com precisão técnica e profissionalismo jurídico.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;