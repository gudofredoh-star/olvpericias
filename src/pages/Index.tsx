import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Calculator,
  FileText,
  Clock,
  Shield,
  CheckCircle,
  Award,
  Users,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Eye,
  Target,
  Briefcase,
  Scale,
  TrendingUp,
  FileCheck,
  AlertCircle
} from 'lucide-react';

const Index = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
  };

  const servicos = [
    {
      titulo: "Liquidação Inicial",
      descricao: "Cálculo completo das verbas trabalhistas com base na sentença judicial",
      icone: <Calculator className="icon-professional" />,
      prazo: "24-48h"
    },
    {
      titulo: "Liquidação de Sentença",
      descricao: "Apuração precisa dos valores devidos conforme decisão judicial",
      icone: <Scale className="icon-professional" />,
      prazo: "3-5 dias"
    },
    {
      titulo: "Atualização de Valores",
      descricao: "Correção monetária e juros aplicados conforme legislação vigente",
      icone: <TrendingUp className="icon-professional" />,
      prazo: "24-48h"
    },
    {
      titulo: "Cálculos para Acordo",
      descricao: "Simulações e cenários para negociações extrajudiciais",
      icone: <FileCheck className="icon-professional" />,
      prazo: "24-48h"
    },
    {
      titulo: "Impugnação de Cálculos",
      descricao: "Análise técnica e contestação fundamentada de cálculos apresentados",
      icone: <AlertCircle className="icon-professional" />,
      prazo: "3-5 dias"
    },
    {
      titulo: "Revisão dos Cálculos do Juízo",
      descricao: "Verificação e análise crítica dos cálculos elaborados pelo tribunal",
      icone: <Eye className="icon-professional" />,
      prazo: "3-5 dias"
    },
    {
      titulo: "Parecer Técnico",
      descricao: "Análise especializada com fundamentação técnica e jurídica",
      icone: <FileText className="icon-professional" />,
      prazo: "5-7 dias"
    },
    {
      titulo: "Cálculos Específicos",
      descricao: "Horas extras, DSR, férias + 1/3, 13º, adicionais, reflexos, FGTS e rescisões",
      icone: <Target className="icon-professional" />,
      prazo: "24-72h"
    }
  ];

  const diferenciais = [
    {
      titulo: "Precisão Técnica",
      descricao: "Todos os cálculos são realizados exclusivamente no PJe-Calc oficial",
      icone: <Award />
    },
    {
      titulo: "Responsabilidade Profissional",
      descricao: "Formação em Ciências Contábeis e atuação pericial consolidada",
      icone: <Shield />
    },
    {
      titulo: "Entregas Rápidas",
      descricao: "Prazos otimizados sem comprometer a qualidade técnica",
      icone: <Clock />
    },
    {
      titulo: "Laudos Prontos para PJe",
      descricao: "Documentos formatados para anexação direta no sistema judicial",
      icone: <CheckCircle />
    },
    {
      titulo: "Comunicação Objetiva",
      descricao: "Relatórios claros, diretos e tecnicamente fundamentados",
      icone: <FileText />
    },
    {
      titulo: "Sigilo Absoluto",
      descricao: "Confidencialidade total dos dados e informações processuais",
      icone: <Users />
    }
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* DIFERENCIAIS */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciais.map((d, i) => (
              <Card key={i} className="card-professional text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center mb-4">
                    {React.cloneElement(d.icone, {
                      className: "w-6 h-6 text-[hsl(var(--primary))]"
                    })}
                  </div>
                  <CardTitle>{d.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {d.descricao}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO PROFISSIONAL */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <Card className="contact-form max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Solicitar Orçamento</CardTitle>
              <CardDescription>
                Preencha o formulário para receber uma proposta personalizada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="nome"
                  placeholder="Nome completo"
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email profissional"
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  name="mensagem"
                  placeholder="Detalhes do projeto"
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" className="w-full btn-primary">
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
};

export default Index;
