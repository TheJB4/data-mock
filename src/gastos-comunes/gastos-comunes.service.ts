import { Injectable } from '@nestjs/common';

export const bienesServiciosExpenses = [
  {
    id: '1',
    date: 'Jun 26, 2024',
    type: 'Restauración',
    amount: 'US$ 90.00',
    status: 'paid',
    pending: 'US$ 00.00',
  },
  {
    id: '2',
    date: 'Jun 26, 2024',
    type: 'Mantenimiento',
    amount: 'Bs. 4.879,50',
    status: 'paid',
    pending: 'Bs. 00.00',
  },
  {
    id: '3',
    date: 'Jun 25, 2024',
    type: 'Reparación',
    amount: 'Bs. 19.800,00',
    status: 'paid',
    pending: 'Bs. 00.00',
  },
  {
    id: '4',
    date: 'Jun 25, 2023',
    type: 'Suministros e instalaciones',
    amount: 'US$ 750.00',
    status: 'pending',
    pending: 'US$ 375.00',
  },
  {
    id: '5',
    date: 'Jun 25, 2022',
    type: 'Administración',
    amount: 'US$ 80.00',
    status: 'paid',
    pending: 'US$ 00.00',
  },
  {
    id: '6',
    date: 'Jun 23, 2024',
    type: 'Honorarios profesionales',
    amount: 'Bs. 5.000,00',
    status: 'overdue',
    pending: 'Bs. 5.000,00',
  },
  {
    id: '7',
    date: 'Jun 23, 2022',
    type: 'Compras y suministros',
    amount: 'Bs. 8.200,45',
    status: 'paid',
    pending: 'Bs. 00.00',
  },
];

export const fondosProvisionesData = [
  {
    id: '1',
    date: 'Jun 26, 2024',
    action: 'Provisión',
    purpose: 'Mantenimiento extraordinario',
    fundType: 'US$ 200,00',
    goal: 'US$ 1.000,00',
    collected: 'US$ 1.340,00',
    progress: 100,
    status: 'active',
    reminders: '00',
  },
  {
    id: '2',
    date: 'May 15, 2024',
    action: 'Fondos',
    purpose: 'Obra nueva',
    fundType: 'US$ 220,00',
    goal: 'US$ 2.500,00',
    collected: 'US$ 220,00',
    progress: 20,
    status: 'active',
    reminders: '00',
  },
  {
    id: '3',
    date: 'Mar 01, 2024',
    action: 'Provisión',
    purpose: 'Obra',
    fundType: 'US$ 1.200,00',
    goal: 'US$ 5.260,00',
    collected: 'US$ 5.260,00',
    progress: 100,
    status: 'active',
    reminders: '00',
  },
  {
    id: '4',
    date: 'Mar 01, 2024',
    action: 'Fondos',
    purpose: 'Remodelación',
    fundType: 'US$ 50,00',
    goal: 'US$ 00,00',
    collected: 'US$ 00,00',
    progress: 0,
    status: 'active',
    reminders: '00',
  },
  {
    id: '5',
    date: 'Feb 24, 2024',
    action: 'Fondos',
    purpose: 'Restauración',
    fundType: 'US$ 1.200,00',
    goal: 'US$ 224,00',
    collected: 'US$ 224,00',
    progress: 100,
    status: 'active',
    reminders: '00',
  },
  {
    id: '6',
    date: 'Ene 26, 2024',
    action: 'Fondos',
    purpose: 'Ascensores frente',
    fundType: 'US$ 142,00',
    goal: 'US$ 00,00',
    collected: 'US$ 00,00',
    progress: 0,
    status: 'active',
    reminders: '00',
  },
  {
    id: '7',
    date: 'Feb 21, 2024',
    action: 'Fondos',
    purpose: 'Climatización',
    fundType: 'US$ 184,00',
    goal: 'US$ 357,00',
    collected: 'US$ 357,00',
    progress: 100,
    status: 'active',
    reminders: '00',
  },
];

export const fondosProvisionesCompleted = [
  {
    id: '1',
    date: 'Jun 26, 2024',
    action: 'Provisión',
    purpose: 'Ascensor',
    fundType: 'US$ 1.000,00',
    collected: 'US$ 1.000,00',
    duration: 'Bs. 1.700,00',
    progress: 100,
    status: 'completed',
  },
  {
    id: '2',
    date: 'Feb 26, 2024',
    action: 'Provisión',
    purpose: 'Deck',
    fundType: 'US$ 1.200,00',
    collected: 'US$ 1.200,00',
    duration: 'Bs. 4.000,00',
    progress: 100,
    status: 'completed',
  },
];

@Injectable()
export class GastosComunesService {
  getBienesServiciosExpenses() {
    return bienesServiciosExpenses;
  }

  getFondosProvisionesData() {
    return fondosProvisionesData;
  }

  getFondosProvisionesCompleted() {
    return fondosProvisionesCompleted;
  }
}

